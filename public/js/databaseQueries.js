const oracledb = require('oracledb')
const express = require('express')

const config = {
  user: 'DONOVAN',
  password: 'cmpg321',
  connectString: 'localhost:1521/orcl'
}

async function getUser (user_email,user_password) {
  let conn

  try {
    conn = await oracledb.getConnection(config)

    const result = await conn.execute(
      'SELECT * FROM ACCOUNT WHERE email = :email AND WHERE password = :password',
      [user_email,user_password]
    )

    console.log(result.rows[0])
  } catch (err) {
    console.log('Ouch!', err)
  } finally {
    if (conn) { // conn assignment worked, need to close
      await conn.close()
    }
  }
}