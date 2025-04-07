import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface HistoryTableData {
  id: string;
  FormData: string | null;
  aiResponse: string;
  templateSlug: string;
}

const HistoryTable = ({ data }: { data: HistoryTableData }) => {
  const [open, setOpen] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Limit AI Response to 100 characters (or adjust as needed)
  const shortResponse = data.aiResponse.length > 100 ? data.aiResponse.substring(0, 100) + "..." : data.aiResponse;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-6xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <span className="mr-2">📜</span> History Entry
      </h3>
      
      <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
        <div className="grid grid-cols-5 bg-gray-100 px-4 py-3 font-medium text-gray-700">
          <div>ID</div>
          <div>Form Data</div>
          <div>AI Response</div>
          <div>Template Slug</div>
          <div>Actions</div>
        </div>
        
        <div className="grid grid-cols-5 px-4 py-4 border-t border-gray-200 gap-4 items-start">
          <div className="text-gray-800">{data.id}</div>
          
          <div className="text-gray-700">
            {data.FormData
              ? Object.entries(JSON.parse(data.FormData)).map(([key, value], index) => (
                  <div key={index} className="mb-1">
                    <span className="font-semibold">{key}:</span> {String(value)}
                  </div>
                ))
              : "No Data"}
          </div>
          
          <div className="text-gray-700">
            <p>{shortResponse}</p>
            {data.aiResponse.length > 100 && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-screen overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Full AI Response</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 whitespace-pre-wrap text-gray-700">
                    {data.aiResponse}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <div className="text-gray-700">{data.templateSlug}</div>
          
          <div>
            <Button 
              className="flex items-center gap-2 bg-blue-600 text-white"
              onClick={() => handleCopy(data.aiResponse)}
            >
              <ClipboardCopy size={16} />
              <span >Copy Text</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;