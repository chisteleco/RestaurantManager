import { Sequelize, Model, DataTypes } from 'sequelize'


export default function handler(req, res) {
   

    const user = 'kbzcrjwbckxhyx'
    const host = 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com'
    const database = 'd5l2jjke7g5d4e'
    const password = '1adb7cc9a5667f9b6c6fb247971e1dbe78a71111a554794e14099b973fc4d3ae'
    const port = 5432



    const sequelize = new Sequelize(database, user, password, {
        host:host,
        port:port,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      })

      //define model
     
        const User = sequelize.define("UserModel", {
            // Model attributes are defined here
            id:{
                type:DataTypes.INTEGER,
                allowNull:true,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false
            },
            password: {
              type: DataTypes.STRING
              // allowNull defaults to true
            },            
            valuntil: {
              type: DataTypes.DATE
              // allowNull defaults to true
            },
            sysadmin: {
              type: DataTypes.BOOLEAN
              // allowNull defaults to true
            },
          },
        {
        timestamps: false,
        tableName:'AccessUsers'
        }
        )
      
       
    

    //let data=await userModel.findAll();
    async function dbauth(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            a='yes'
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
        }
        dbauth();
        
    const getData= async()=>{
        try
        {
            let a=await User.findAll();
            return a;
        }
        catch(error){
            console.error('error en el findAll:', error)
        }
        
      }
    getData().then(data=>res.status(200).json(data))


    
  }
  
   