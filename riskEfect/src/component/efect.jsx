const { useState, useEffect } = require("react")

const Component = () =>{
    const [value,setValue] = useState(false)

    useEffect(() =>{
        console.log('el codigo a ejecutar')
    },[])//Aqui van las dependencias

}