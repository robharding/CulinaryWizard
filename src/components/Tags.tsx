import { FC } from "react";
import { Badge } from "./ui/badge";

interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="pt-1 truncate">
      {tags.map((tag) => (
        <Badge key={tag} className="mr-2" variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
