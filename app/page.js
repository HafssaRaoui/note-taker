'use client'
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const {user} = useUser();
  const createUser = useMutation(api.user.createUser)

  useEffect(()=>{
    user&&checkUser()
  }
    ,[user])
  
  const checkUser = async()=>{
    const result = await createUser({
      email : user?.primaryEmailAddress?.emailAddress,
      imageUrl : user?.imageUrl,
      username : user?.fullName
    })

    console.log(result)

  } 

  return (
    <div>
      <h1>hello next.js!</h1>
     <Button>click me!</Button>
     <UserButton/>
  
    </div>
     );
}
