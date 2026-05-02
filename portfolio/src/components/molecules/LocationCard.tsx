import { MapPinIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const GOOGLE_MAP_LOCATION = "https://www.google.com/maps/place/Sacramento,+CA/@38.56173,-121.5441392,12z/data=!3m1!4b1!4m6!3m5!1s0x809ac672b28397f9:0x921f6aaa74197fdb!8m2!3d38.5781342!4d-121.4944209!16zL20vMDdiY24?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"

function LocationDetails() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row">
                    Greater Sacramento
                </CardTitle>
                <CardDescription>California</CardDescription>
                <CardAction>
                    <Button asChild>
                        <a href={GOOGLE_MAP_LOCATION} target="_blank">
                            <MapPinIcon />
                            View in Map
                        </a>
                    </Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default function LocationCard() {
    return (
        <article className="w-full mt-4 lg:mt-0">
            <header className="w-full flex justify-end text-xl py-2">Location</header>
            <LocationDetails />
        </article>
    )
}
