import Tag from "@/components/Tag";
import ExamplesColumn from "@/components/ExamplesColumn";
import StyledWord from "@/components/StyledWord";
import {
    ChartLine,
    Coffee,
    DollarSign,
    File,
    Heart,
    Home,
    Navigation,
    Pizza,
    Scissors,
    Smile,
    Truck,
} from "lucide-react";

const INTEGRATIONS_INBOUND = [
    {
        name: "Dentist Office",
        Icon: <Smile size={40} className="text-primary" />,
        description: "Schedule appointments, patient FAQs",
    },
    {
        name: "Restaurant",
        Icon: <Coffee size={40} className="text-primary" />,
        description: "Reservations, menu inquiries",
    },
    {
        name: "Insurance Companies",
        Icon: <File size={40} className="text-primary" />,
        description: "Claims, policy help, support",
    },
    {
        name: "Barbershop",
        Icon: <Scissors size={40} className="text-primary" />,
        description: "Availability, bookings, inquiries",
    },
    {
        name: "Realtor Office",
        Icon: <Home size={40} className="text-primary" />,
        description: "Property inquiries, viewings",
    },
    {
        name: "SaaS Website",
        Icon: <Navigation size={40} className="text-primary" />,
        description: "Support, product information, troubleshooting",
    },
];

const INTEGRATIONS_OUTBOUND = [
    {
        name: "Satisfaction Surveys",
        Icon: <File size={40} className="text-primary" />,
        description: "Collect customer insights",
    },
    {
        name: "Qualifying Leads",
        Icon: <ChartLine size={40} className="text-primary" />,
        description: "Screen potential clients",
    },
    {
        name: "Debt Collection",
        Icon: <DollarSign size={40} className="text-primary" />,
        description: "Negotiate repayments",
    },
    {
        name: "Transportation Logistics",
        Icon: <Truck size={40} className="text-primary" />,
        description: "Check shipment statuses",
    },
    {
        name: "Telehealth Check-ins",
        Icon: <Heart size={40} className="text-primary" />,
        description: "Monitor patient health",
    },
    {
        name: "Food Delivery",
        Icon: <Pizza size={40} className="text-primary" />,
        description: "Inform delivery progress",
    },
];

export type IntegrationType = typeof INTEGRATIONS_INBOUND;

export default function Examples() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <div className="flex justify-center">
                            <Tag>Examples (Use Cases)</Tag>
                        </div>

                        <h2 className="text-6xl font-medium mt-6 text-center md:text-start">
                            Excels in Every <StyledWord>Scenario</StyledWord>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg text-center md:text-start">
                            From handling inbound customer inquiries to managing
                            outbound notifications, our AI Voice Agent adapts
                            perfectly to diverse use cases, ensuring efficient
                            and reliable performance for all your needs.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <ExamplesColumn
                                integrations={INTEGRATIONS_INBOUND}
                            />
                            <ExamplesColumn
                                integrations={INTEGRATIONS_OUTBOUND}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
