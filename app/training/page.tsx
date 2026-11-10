import { redirect } from "next/navigation";
import { lessons } from "@/lib/course";

// The course opens straight on the first lesson (video in the middle, lessons left, sign-up right).
export default function TrainingPage() {
  redirect(`/training/${lessons[0].slug}`);
}
