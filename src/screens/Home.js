import { StyleSheet, Text, View} from "react-native";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [data ,setData] = useState([])
    const [load ,setload] = useState(true)
    const url ="http://192.168.215.12:3000/products"
    useEffect(()=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setload(false));
    })
  return (
    <View style={styles.main}>
        {
        load ? <Text>load</Text> :(
            data.map((post)=>(
                <View>
                  <Text>----------------------------------------------------</Text>
                    <Text>ten san pham:{post.name}</Text>
                    <Text>mau sac:{post.color}</Text>
                    <Text>gia tien:{post.price}</Text>
                    <Text></Text>
                </View>
            ))
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
  img: {
    width:166,
    height:166,
  }
});
