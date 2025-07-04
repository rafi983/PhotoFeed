import PhotoList from "@/components/PhotoList";
import { getAllPhotos } from "@/lib/image-data";

export default async function Home() {

  const photos = await getAllPhotos();

  return (
    <PhotoList photos={photos} />
  );
}
