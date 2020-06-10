<?php

namespace App\Http\Controllers;

use App\Listing;

class ListingController extends Controller
{
    private function get_listing($listing)
    {
        $model = $listing->toArray();
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset('images/' . $i . '/Image_' . $i . '.jpg');
        }

        return collect(['listing' => $model]);
    }

    public function get_listing_api(Listing $listing)
    {
        $data = $this->get_listing($listing);

        return response()->json($data);
    }

    public function get_listing_web(Listing $listing)
    {
        $data = $this->get_listing($listing);

        return view('app', ['data' => $data]);
    }

    public function get_home_web()
    {
        return view('app', ['data' => []]);
    }
}
