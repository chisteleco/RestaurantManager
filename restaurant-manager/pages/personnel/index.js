import Head from 'next/head'
import Image from 'next/image'
import { Sequelize, Model, DataTypes } from 'sequelize'

export default function Home({datosa}) {
  {console.log(JSON.stringify(datosa.data))}

  return (
  <>       
   <table>
   <tr>
    <th>ID</th>
    <th>Username</th>
    <th>sysadmin</th>
  </tr>
    {
      datosa.data.map((e)=>
      <tr>
        <td>{e.id}</td>
        <td>{e.UserName}</td>
        <td>{String(e.sysadmin)}</td>
      </tr>)
    }
  
</table>
         
         
         
    </>
  )
}

//fetch server data
export async function getServerSideProps() {
 
    const user = 'kbzcrjwbckxhyx'
    const host = 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com'
    const database = 'd5l2jjke7g5d4e'
    const password = '1adb7cc9a5667f9b6c6fb247971e1dbe78a71111a554794e14099b973fc4d3ae'
    const port = 5432

    
    const sequelize = new  Sequelize(database, user, password, {
        host:host,
        port:port,
        dialect: 'postgres',
        logging: false, 
        dialectOptions: {
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
            }
          },
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
  
 //connect to db
 async function dbauth(){
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  dbauth();
   
  const getData= async()=>{
    try
    {
        let data=await User.findAll();
        console.log("ESTA PASANDO POR AQUI")
        return { data };
    }
    catch(error){
        console.error('error en el findAll:', error)
    }
    
  }
  // Pass data to the page via props
  let datos = await getData()
  
  console.log(` Los datos recibidos son : ${datos}`)
  console.log(datos);
  return {props:{
    datosa:JSON.parse(JSON.stringify(datos))
  }}
  }
  
