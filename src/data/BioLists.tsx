import {
  CheckCircleFillIcon,
  CommentDiscussionIcon,
  FeedStarIcon,
  PackageIcon,
} from "@primer/octicons-react";
import { BioItem } from "../types/Types";

export const BioValues: BioItem[] = [
  {
    icon: <FeedStarIcon size={16} />,
    title: "Clean, DRY code",
    text: "Easy to read, easy to update",
  },
  {
    icon: <PackageIcon size={16} />,
    title: "Modularity",
    text: "Write it once, use it 800 times",
  },
  {
    icon: <CheckCircleFillIcon size={16} />,
    title: "Maintainable code",
    text: "No hacky workarounds, find a solution that makes sense and will last",
  },
  {
    icon: <CommentDiscussionIcon size={16} />,
    title: "Clear communication",
    text: "The only way anything gets done",
  },
];
