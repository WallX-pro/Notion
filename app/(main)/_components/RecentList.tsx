import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Item } from "./Item";
import { FileClock, FileIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function RecentList({ navDrawer }: { navDrawer?: boolean }) {
  const params = useParams();
  const router = useRouter();
  const documents = useQuery(api.documents.getRecentlyOpened);

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={0} />
        <Item.Skeleton level={0} />
      </>
    );
  }

  if (documents.length === 0) return null;

  return (
    <div>
      <p className="text-muted-foreground/60 flex items-center px-3 py-1 text-[13px] font-medium">
        <FileClock className="mr-1 size-3 shrink-0" />
        Recently opened
      </p>

      {documents.map((document) => (
        <div key={document._id}>
          <Item
            id={document._id}
            onClick={() => router.push(`/documents/${document._id}`)}
            label={document.title}
            icon={FileIcon}
            documentIcon={document.icon}
            active={params.documentId === document._id}
            level={0}

            showDragHandle={false}
            navDrawer={navDrawer}
          />
        </div>
      ))}
    </div>
  );
}
