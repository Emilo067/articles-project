import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with filled state', () => {
        const dataForm = {
            username: 'admin',
            country: Country.Belarus,
            age: 24,
            lastname: 'Hasanau',
            first: 'Emil',
            city: 'Minsk',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: dataForm,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(dataForm);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
