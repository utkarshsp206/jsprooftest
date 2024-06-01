/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTStore = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, length, size) {
    const NFT = {
        "MovieName" : name,
        "Length": length,
        "FileSize": size
    }

    NFTStore.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("The Details of NFTs are below: ");
    for(let i=0;i<NFTStore.length;i++){
        console.log("Video Name: " + NFTStore[i].MovieName);
        console.log("Video Length: "+NFTStore[i].Length);
        console.log("File Size: "+ NFTStore[i].FileSize);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The number of NFTs minted are: "+NFTStore.length);
}

// call your functions below this line
mintNFT("Ramayana", "20min", "200mb");
mintNFT("Kalki", "25min", "230mb");
mintNFT("Hanuman", "90min", "300mb")

listNFTs();
getTotalSupply();
