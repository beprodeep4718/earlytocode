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
          <Button className="px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600" variant="outline">Book Your Free Class</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Booking Free Class</DialogTitle>
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
