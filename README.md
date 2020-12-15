# nalytimk

Accurately send log entry in the Firestore on any page from these two websites :

* [rimarok.com](https://rimarok.com),
* [imrok.fr](https://imrok.fr) (obsolete version to replace).

## GPDR

An alert ask new comers if they allow me to :

* Track their navigation with a `localStorage`* identifier,
* Store their IP address for more navigation tracking accuracy.

*\* Cookies management seemed quite harshy with Firebase Functions
external domain, so I opted-in for `localStorage`.*

## Usage

Data is stored in Firestore, waiting to be read and processed.
