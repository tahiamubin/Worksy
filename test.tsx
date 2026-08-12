import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import type { FormEvent } from "react";

// Shape of the data you expect to pull out of the form.
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const CreateProject = () => {
  // One handler. No per-field state, no onChange props needed on inputs.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as ContactFormData;
    console.log(data);
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary">Open Contact Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Contact Us</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below and we'll get back to you. The modal
                  adapts automatically when the keyboard appears on mobile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    id="contact-form"
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="email"
                      type="email"
                      variant="secondary"
                    >
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input placeholder="Enter your phone number" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="company"
                      variant="secondary"
                    >
                      <Label>Company</Label>
                      <Input placeholder="Enter your company name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="message"
                      variant="secondary"
                    >
                      <Label>Message</Label>
                      <Input placeholder="Enter your message" />
                    </TextField>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                {/* type="submit" + form="contact-form" lets this button (which lives
                    outside the <form> tag, in the Footer) still trigger the submit */}
                <Button type="submit" form="contact-form">
                  Send Message
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default CreateProject;
