# Howto Bitcoin by example
To educate my ass, about the biggest since the invetion of zeh intertubes. I have created these simple examples to see all the gears moving inside of bitcoin. Very basic stuff, so open yourself a terminal and type away!

## Getting started
These are all examples for edu porpuses, do not use for production!

### Prerequisites
Before you start, all examples are on OSX with Node, npm and brew installed.

### Installing

Pull & Run [bitcoin-testnet-box](https://github.com/freewil/bitcoin-testnet-box) via docker
```
https://github.com/freewil/bitcoin-testnet-box
docker run -t -i -p 19001:19001 -p 19011:19011 freewil/bitcoin-testnet-box
```
You should be logged into the docker box

Generate 200 blocks
```
make generate BLOCKS=200
```

Verify balance
```
make getinfo
```

Generate address2, please copy this address
```
make address2
```
### Running examples

install dependencies
```
npm install
```

Run transfer
```
node transfer
```

----
## Some reference
Oooo all the glorious nifty tools are making me cry. Some links for the lazy :D

### Documentation
- https://github.com/freewil/bitcoin-testnet-box
- https://en.bitcoin.it/wiki/API_reference_%28JSON-RPC%29
- https://github.com/freewil/node-bitcoin