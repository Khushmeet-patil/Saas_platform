"use client"
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import HistoryTable from "@/app/dashboard/_components/HistoryTable";


function HistoryList  ()  {

    const {user} = useUser();
    const [history, setHistory] = useState<{ id: number; FormData: string; aiResponse: string | null; templateSlug: string; createdBy: string; createdAt: string; }[]>([]);

    useEffect(() => {
       user&& GetHistory();
    },[user])

    const GetHistory=async()=>{
        if (!user?.primaryEmailAddress?.emailAddress) {
            console.error("User email address is undefined");
            return;
        }
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress)).orderBy(desc(AIOutput.id));
        console.log(result);
        setHistory(result);
    }
    return (
      <div>
        <h2 className="text-lg font-medium my-2 py-2 flex"></h2>
        <div>
          {history && history.map((item) => (
            <HistoryTable key={item.id.toString()} data={{ ...item, id: item.id.toString(), aiResponse: item.aiResponse ?? "" }} />
          ))}
        </div>
      </div>
    );
  }
  
  
  export default HistoryList;
  


