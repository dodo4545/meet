# Code Citations

## License: unknown
https://github.com/JNicholas54/what-2-do/tree/85f2348cdbca544d38dc215366a058750257d91a/src/_tests_/CitySearch.test.js

```
from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch
```


## License: unknown
https://github.com/codestun/event-explorer/tree/e9241837a4eb8c57f12205e23c8565de9f2fb00b/src/tests/CitySearch.test.js

```
./components/CitySearch';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  test('renders text input', ()
```


## License: unknown
https://github.com/JanTran/meet/tree/ab009280ba4810cf5dfc229e0557bcab5d6ae33f/src/__tests__/CitySearch.test.js

```
/> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox
```


## License: unknown
https://github.com/juli20008/Meet_App/tree/c1bd8158131c181039a43b225b9d594cb1e4dced/src/__tests__/CitySearch.test.js

```
test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is
```


## License: unknown
https://github.com/hamzaTCF/meet_app_4.8/tree/2bcc43f65f7890ec16aa1a109ed92de406470abb/src/__tests__/CitySearch.test.js

```
, () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', ()
```

