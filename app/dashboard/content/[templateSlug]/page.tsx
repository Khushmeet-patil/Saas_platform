"use client"
import React, { useState, use } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TempleteListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

// Define the PageParams type to match Next.js dynamic route params
type PageParams = {
  templateSlug: string;
};

// Export the Page component with the correct type signature
export default function CreateNewContent({ params }: { params: Promise<PageParams> }) {
  // Unwrap the params Promise using React.use()
  const { templateSlug } = use(params);

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item: TEMPLATE) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();

  const GenerateAIContent = async (FormData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(FormData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  const SaveInDb = async (FormData: any, slug: any, aiResp: string) => {
    if (!FormData || !slug || !aiResp || !user?.primaryEmailAddress?.emailAddress) {
      console.error("Missing required fields for database insertion.");
      return;
    }

    const result = await db.insert(AIOutput).values({
      FormData: FormData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };

  return (
    <div className='p-10'>
      <Link href="/dashboard">
        <Button className='bg-blue-700'><ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        {selectedTemplate && (
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading}
          />
        )}
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}