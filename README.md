# Substitutions ZSTiO

A refreshed version of the [substitution page](http://kristofc.webd.pro/plan/InformacjeOZastepstwach.html) for [Zespół Szkół Technicznych i Ogólnokształcących](https://zstiojar.edu.pl/), operated by Web Scrapping.

## Tech Stack

- Next.js, React, TailwindCSS, Flowbite

## API Reference

#### Get substitutions

```http
  GET /api/getSubstitutions
```

#### The above URL returns all substitutions from the current day.

#### To the url above, you can add the following parameters:

| Parameters (Optional)            | Description                                                                                                 |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `?search=branch&query=2tp`       | Returns a substitute for the class specified in `query`                                                     |
| `?search=teacher&query=kowalski` | Returns teacher substitutions, specified in `query`. The value in `query`, for example, can be just a name. |

## Links

[![portfolio](https://img.shields.io/badge/GitHub-rvyk-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rvyk/)
[![portfolio](https://img.shields.io/badge/Github-majusss-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/majusss/)
[![linkedin](https://img.shields.io/badge/TRY-0A66C2?style=for-the-badge&logoColor=white)](https://zastepstwa.awfulworld.space/)
