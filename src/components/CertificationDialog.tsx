import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CertificationDialogProps {
  certificateImage: string;
  badge: React.ReactNode;
  isPotrait: boolean;
}

const CertificationDialog = ({ badge, certificateImage, isPotrait }: CertificationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer transform hover:scale-105 transition-transform duration-200">
          {badge}
        </div>
      </DialogTrigger>
      <DialogContent >

        {
          isPotrait ? (<div className="w-auto h-auto">
            <img
              src={certificateImage}
              alt="certificate"
              className="object-cover max-w-[600px] max-h-[800px]"
            />
          </div>
          ) : (<div className="w-auto h-auto">
            <img
              src={certificateImage}
              alt="certificate"
              className="object-cover max-w-[800px] max-h-[600px]"
            />
          </div>
          )
        }



      </DialogContent>
    </Dialog>
  );
};

export default CertificationDialog;