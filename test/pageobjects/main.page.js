import Page from './page'

class MainPage extends Page {

    get firstName() {
        return $("input[type='text'][name='firstname']");
    }

    get lastInitial() {
        return $("input[type=\"text\"][name=\"lastinitial\"]");
    }

    get nickName() {
        return $("input[type=\"checkbox\"][name=\"shorten\"]");
    }

    get maleName() {
        return $("input[type=\"submit\"][name=\"Male\"]")
    }

    get femaleName() {
        return $("input[type=\"submit\"][name=\"Female\"]")
    }

    get listFirstLine() {
        return $("table>tbody>tr>td>div>h1");
    }

    get errorFirstName() {
        return $$('h1')[1];
    }

    get listTitle() {
        return $('h2>strong');
    }

    get newListLine() {
        return $$('h1')[1];
    }

}

export default new MainPage();