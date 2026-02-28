<?php

namespace App\Filament\Resources\AppointmentResource;

use App\Filament\Resources\AppointmentResource\Pages;
use App\Models\Appointment;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class AppointmentResource extends Resource
{
    protected static ?string $model = Appointment::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('user_id')->relationship('user','name')->required(),
            Forms\Components\Select::make('therapist_id')->relationship('therapist','name')->required(),
            Forms\Components\Select::make('service_id')->relationship('service','name')->required(),
            Forms\Components\DateTimePicker::make('starts_at')->required(),
            Forms\Components\DateTimePicker::make('ends_at')->required(),
            Forms\Components\Select::make('status')->options([
                'pending'=>'Pending',
                'confirmed'=>'Confirmed',
                'cancelled'=>'Cancelled',
                'completed'=>'Completed',
            ])->required(),
            Forms\Components\Textarea::make('notes'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('user.name'),
                Tables\Columns\TextColumn::make('therapist.name'),
                Tables\Columns\TextColumn::make('service.name'),
                Tables\Columns\TextColumn::make('starts_at')->dateTime(),
                Tables\Columns\TextColumn::make('status'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAppointments::route('/'),
            'create' => Pages\CreateAppointment::route('/create'),
            'edit' => Pages\EditAppointment::route('/{record}/edit'),
        ];
    }
}
