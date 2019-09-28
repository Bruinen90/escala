import React, { Component } from 'react';
import Rules from '../../containers/Rules/Rules';

import { Translate, withLocalize } from 'react-localize-redux';

import data from './data.json';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(data);
  }
  render() {
    return (
      <Rules>
        <h2><Translate id="privacyHeader" /></h2>
        <ol>
          <li>
            <Translate id="privacyAdminTop" />
            <p>
              <Translate id="privacyAdminAddress" />{' '}
              <a href="mailto: info@escalapoland.com">info@escalapoland.com</a>.
            </p>
          </li>
          {Object.keys(data['privacy']).map(id => (
          <li key={id}>
            <Translate id={`privacy.${id}`} />
          </li>
        ))}
        </ol>
        <h2><Translate id="cookiesHeader" /></h2>
        Strona internetowa www.escalapoland.com wykorzystuje pliki „cookies”,
        które pozwalają na zapamiętanie wybranych informacji o jego
        użytkownikach i ich preferencjach. Za ich pomocą nie są jednak
        przetwarzane lub przechowywane dane osobowe.
        <h3>Co to jest „cookies”?</h3>
        <ul>
          <li>
            Pliki cookies to niewielkie pliki tekstowe wysyłane i przechowywane
            na komputerze użytkownika, smartfonie czy innym urządzeniu, z
            którego łączy się z Internetem.
          </li>
          <li>
            Pliki cookies pobierane są za pośrednictwem przeglądarki
            internetowej podczas pierwszego wejścia na stronę.
          </li>
          <li>
            Pliki cookies nie powodują zmian konfiguracyjnych w urządzeniu, z
            którego korzysta użytkownik; pliki pomagają w dostosowaniu
            zawartości strony internetowej do oczekiwań, ułatwiają nawigację na
            stronach i zapewniają skuteczność procedur bezpieczeństwa.
          </li>
          <li>
            Pliki cookies pozwalają ocenić, jakie są upodobania użytkowników, a
            także jak można ulepszać stronę internetową.
          </li>
        </ul>
        Użytkownik, który nie życzy sobie wykorzystywania plików „cookies” w
        opisanym powyżej celu, ma możliwość skonfigurowania ustawień
        oprogramowania zainstalowanego w urządzeniu tj. wykorzystywanej
        przeglądarki internetowej lub aplikacji w sposób uniemożliwiający
        przechowywanie wspomnianych plików w pamięci komputera. W każdej chwili
        może również usunąć je ręcznie. W celu zapoznania się ze szczegółową
        instrukcją postępowania prosimy o odwiedzenie strony internetowej
        producenta używanej przeglądarki internetowej.
        <h3>Typy „cookies” - cel ich uzyskiwania i przechowywania</h3>
        <ul>
          <li>
            Konieczne do poprawnego działania stron - niezbędne do prawidłowego
            funkcjonowania strony www.escalapoland.com pozwalają na poruszanie
            się po niej oraz używanie jej elementów, m.in. zapamiętują
            poprzednie czynności podczas powrotu na tę samą stronę czy
            wypełniania formularzy.
          </li>
          <li>
            Poprawiające wydajność - zbierają informacje na temat sposobu
            korzystania przez użytkowników ze strony www.escalapoland.com : z
            jakich obszarów korzystają, ile czasu na nich spędzają itp. Dzięki
            tym informacjom możliwe jest poprawianie działania stron oraz
            badanie potrzeb użytkowników.
          </li>
          <li>
            Poprawiające funkcjonalność - zapamiętywanie ustawień i wyborów
            użytkownika. .
          </li>
          <li>
            Statystyczne - tworzenie anonimowych statystyk służących do
            poprawiania funkcjonalności i zawartości stron.
          </li>
        </ul>
        Używając ciasteczek w wyżej opisany sposób nigdy nie identyfikujemy
        tożsamości użytkowników na podstawie informacji przechowywanych w
        ciasteczkach.
      </Rules>
    );
  }
}

export default withLocalize(PrivacyPolicy);
