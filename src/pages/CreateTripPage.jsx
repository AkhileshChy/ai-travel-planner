import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTripPage() {
    const [place, setStatePlace] = useState();
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>Tell us your travel preference</h2>
            <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences.</p>
            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>Enter the destination of choice</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{
                            place,
                            onChange: (value) => setStatePlace(value)
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days</h2>
                    <Input placeholder={'Ex.3'} type="number" />
                </div>
            </div>
        </div>
    )
}

export default CreateTripPage