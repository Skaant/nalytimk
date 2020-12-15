# nalytimk-functions

This is the `nalytimk` **serverless functions repository**.

You can check the navigator script in the `rimarok` repository,
[`rimarok/_websites/default/_assets/nalytimk.js`](https://github.com/Skaant/rimarok/blob/master/_websites/default/_assets/nalytimk.js).

## Features

Send log entry in the Firestore on any page reach from these two websites :

* [rimarok.com](https://rimarok.com),
* [imrok.fr](https://imrok.fr) (obsolete version to replace).

Data can now be consulted.

## GPDR

An alert ask new comers if they allow me to :

* Track their navigation with a `localStorage`* identifier,
* Store their IP address for more navigation tracking accuracy.

*\* Cookies management seemed quite harshy with Firebase Functions
external domain, so I opted-in for `localStorage`.
