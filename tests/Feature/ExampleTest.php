<?php

it('Retorna una respuesta correcta, "Status = 200"', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
