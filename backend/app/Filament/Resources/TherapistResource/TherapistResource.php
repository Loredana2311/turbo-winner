<?php

namespace App\Filament\Resources\TherapistResource;

use App\Filament\Resources\TherapistResource\Pages;
use App\Models\Therapist;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class TherapistResource extends Resource
{
    protected static ?string $model = Therapist::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')->required(),
            Forms\Components\TextInput::make('email')->email()->required(),
            Forms\Components\TextInput::make('phone'),
            Forms\Components\Textarea::make('bio'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('email'),
            ])
            ->filters([
                
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
            'index' => Pages\ListTherapists::route('/'),
            'create' => Pages\CreateTherapist::route('/create'),
            'edit' => Pages\EditTherapist::route('/{record}/edit'),
        ];
    }
}
