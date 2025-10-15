import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="px-8 py-6" variant="outline">Contact Us</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Send a Whatsapp Message
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full" type="submit"><Link href="https://wa.me/918910436681?text=Hi%20team%20early2code%2C%20I%20want%20to%20know%20more%20about%20the%20course">Send Message</Link></Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
