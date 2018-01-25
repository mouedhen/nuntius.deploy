<?php

namespace Selenkeys\Core;

use Illuminate\Database\Eloquent\Factory as EloquentFactory;
use Illuminate\Support\ServiceProvider;

abstract class BaseServiceProvider extends ServiceProvider
{
    protected $dir = __DIR__;

    function boot()
    {
        $this->loadRoutesFrom($this->dir . '/routes/api.php');
        $this->loadMigrationsFrom($this->dir . '/database/migrations');
    }

    function register()
    {
        $this->registerEloquentFactoriesFrom($this->dir . '/database/factories');
    }

    /**
     * Register factories.
     *
     * @param  string $path
     * @return void
     */
    protected function registerEloquentFactoriesFrom($path)
    {
        $this->app->make(EloquentFactory::class)->load($path);
    }
}