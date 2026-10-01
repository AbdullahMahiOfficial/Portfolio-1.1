import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

interface ProjectDialogProps {
  project: {
    icon: string
    title: string
    category: string
    description: string
    details: string
  }
  index: number
}

const ProjectDialog = ({ project, index }: ProjectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          key={index}
          className="group hover:shadow-lg transition-shadow duration-300 border border-border cursor-pointer"
        >
          <CardContent className="p-6">
            <div className="">
              <div className="text-4xl mb-4">
                <img
                  src={assetPath(project.icon)}
                  alt={`${project.title} icon`}
                  className="w-[100px] h-[100px] mx-auto"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-primary text-center">
                {project.title}
              </h3>

              <Badge
                variant="secondary"
                className="mb-3 bg-cool-light text-cool-primary block text-center"
              >
                {project.category}
              </Badge>

              <p className="text-sm text-muted-foreground text-center">
                {project.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent
        className="w-[600px] h-[300px] bg-white rounded-lg p-6 flex flex-col items-center justify-start text-justify"
      >
        <h3 className="text-2xl font-semibold text-primary mb-2">
          {project.title}
        </h3>

        <Badge
          variant="secondary"
          className="mb-4 bg-cool-light text-cool-primary"
        >
          {project.category}
        </Badge>

        <div className="overflow-y-auto text-base text-muted-foreground whitespace-pre-wrap w-full h-full">
          {project.details}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog
