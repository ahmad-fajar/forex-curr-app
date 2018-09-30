# forex-curr-app
Simple, app to calculate currencies against USD as base currency, using API provided in [exchangeratesapi.io](https://exchangeratesapi.io/).

### List of currencies
| ***Symbol*** | ***Name*** |
|--------------|------------|
| `CAD` | Canadian Dollar |
| `IDR` | Indonesian Rupiah |
| `GBP` | Great Britain Pound |
| `CHF` | Swiss Franc |
| `SGD` | Singaporean Dollar |
| `INR` | Indian Rupee |
| `MYR` | Malaysian Ringgit |
| `JPY` | Japanese Yen |
| `KRW` | Korean Won |


### How to use

#### Prequisites
- React
- Docker (optional)

#### React
- Clone the repo.
- `cd` to project root.
- Install dependencies.
  - `npm install`
  - `npm install -D` if you want to run test
- Run the apps.
  - `npm start`, or
  - `npm run test` (testing. output on terminal)
- Apps now served on `localhost:3000`

#### Docker
- Clone the repo
- `cd` to project root
- Build by typing `docker build -t forex-curr-app .`
- Run by typing `docker run -it -p 3000:8080 forex-curr-app`
- Apps now served on `localhost:3000`
