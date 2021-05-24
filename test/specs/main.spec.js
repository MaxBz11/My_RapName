import MainPage from '../pageobjects/main.page';
import Data from '../../data/inputValues.json';
import ExpectData from '../../data/expectValues.json'

describe('GENERATE RAP NAME', () => {
    beforeEach(() => {
        MainPage.open();
    });

    describe('THE INPUT FIELDS EXIST', () => {
        it('TC-1.01 First name input field is exist', () => {
            expect(MainPage.firstName).toBeExisting();
        });

        it('TC-1.02 Last initial input field is exist', () => {
            expect(MainPage.lastInitial).toBeExisting();
        });

        it('TC-1.03 Nickname checkbox is exist', () => {
            expect(MainPage.nickName).toBeExisting();
        });
    });


    describe('A NEGATIVE SCENARIO USING THE INPUT FIELDS', () => {
        it('TC-2.01 Incorrect value in first name input field', () => {
            MainPage.firstName.setValue(Data.firstNameInput.specialChar);
            MainPage.maleName.click();
            expect(MainPage.errorFirstName).toHaveTextContaining(ExpectData.firstNameInput.errorMessage);
        });

        it('TC-2.02 Empty value in first name input field', () => {
            MainPage.firstName.setValue(Data.firstNameInput.empty);
            MainPage.maleName.click();
            expect(MainPage.errorFirstName).toHaveTextContaining(ExpectData.firstNameInput.errorMessage);
        });
    });

    describe('DATA CAN BE INPUT INTO THE FIELDS', () => {
        it('TC-3.01 First name input field accepts data', () => {
            MainPage.firstName.setValue(Data.firstNameInput.femaleName);
            expect(MainPage.firstName).toHaveValue(ExpectData.firstNameInput.femaleName);
        });

        it('TC-3.02 Last initial input field accepts data', () => {
            MainPage.lastInitial.setValue(Data.lastInitial.initial);
            expect(MainPage.lastInitial).toHaveValue(ExpectData.lastInitial.initial);
        });
    });


    describe('SUBMIT A NAME FOR MALE WITH A NICKNAME AND VALIDATE THAT A NEW NAME HAS BEEN PREPENDED TO THE LIST', () => {
        it('TC-4.01 Male name with a nickname in the list', () => {
            MainPage.firstName.setValue(Data.firstNameInput.maleName);
            MainPage.maleName.click()
            expect(MainPage.listTitle).toHaveText(ExpectData.list.listTitle);
            expect(MainPage.newListLine).toHaveTextContaining(ExpectData.list.maleNameFirstLetter);
        });
    });


    describe('SUBMIT TWICE FOR A FEMALE WITH A LAST INITIAL AND VALIDATE THAT A NEW NAME HAS BEEN PREPENDED TO THE LIST', () => {
        it('TC-5.10 Submit female name twice and check in the list', () => {
            MainPage.firstName.setValue(Data.firstNameInput.femaleName);
            MainPage.nickName.click();
            MainPage.femaleName.click();
            const firstRapName = MainPage.newListLine.getText();

            MainPage.firstName.setValue(Data.firstNameInput.femaleNameSecond);
            MainPage.nickName.click();
            MainPage.femaleName.click();
            const secondRapName = MainPage.newListLine.getText();

            expect(MainPage.listTitle).toHaveText('Your rap name is:');
            expect(firstRapName).not.toEqual(secondRapName);
        });
    });

});
