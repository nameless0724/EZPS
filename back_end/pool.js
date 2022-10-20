import pg from "pg"
function connectDatabase(){
    const pool = new pg.Pool({
        user : 'postgres',
        password : '24-J1u9l8y9',
        database : 'ezps_website',
        host : 'localhost'
    })
        return pool
}

export { connectDatabase }