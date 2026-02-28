<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServiceApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_list_services_returns_ok()
    {
        // assuming factory exists
        // \App\Models\Service::factory()->count(3)->create();

        $response = $this->getJson('/api/services');
        $response->assertStatus(200);
    }
}
