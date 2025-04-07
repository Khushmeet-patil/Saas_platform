"use client";
import { UserButton } from '@clerk/nextjs';
import SearchSection from './_components/SearchSection';
import TempleteListSection from './_components/TempleteListSection';
import { useState } from 'react';
import HistoryList from './_components/HistoryList';


export default function Dashboard() {
  const [userSearchInput , setUserSearchInput] = useState<string>('');
  return (
    <div>

      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      {/* Template Section */}
      <TempleteListSection userSearchInput={userSearchInput} />
      
    </div>
  );
}