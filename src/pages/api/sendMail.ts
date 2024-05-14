import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { formDetailsSchema } from "@/zodSchema";

const resend = new Resend(process.env.RESEND_API);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const formDetails = formDetailsSchema.parse(JSON.parse(body));

    const { error } = await resend.emails.send({
      from: "clients@evergreensojourn.com",
      to: "evergreensojourn@gmail.com",
      subject: "Hello World",
      html: `
      <div>
        <p>Number of Travellers: ${formDetails.numberOfTravellers}</p>
        <p>Number of Adults: ${formDetails.adults}</p>
        <p>Number of Children: ${formDetails.adults}</p>
        <p>Date of Arrival: ${formDetails.dateOfArrival.toDateString()}</p>
        <p>Duration: ${formDetails.duration}</p>
        <p>Name: ${formDetails.name}</p>
        <p>Email: ${formDetails.email}</p>
        <p>Phone Number: ${formDetails.phoneNumber}</p>
        <p>Nationality: ${formDetails.nationality}</p>
        ${
          formDetails.tripIdeas
            ? `
        <p>Trips Ideas: ${formDetails.tripIdeas}</p>
        `
            : ""
        }
      </div>`,
    });

    if (error) {
      throw new Error(error.message);
    }

    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    throw new Error(error as string);
  }
}
