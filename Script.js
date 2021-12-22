/// # Trait for a Mintable NFT
#[derive(Serialize, JsonSchema, Deserialize, Clone)]
pub struct Mint_NFT_Trait_Version_0_1_0 {
    /// # Initial Owner
    /// The key that will own this NFT
    pub owner: bitcoin::PublicKey,
    /// # Locator
    /// A piece of information that will instruct us where the NFT can be
    /// downloaded -- e.g. an IPFs Hash
    pub locator: String,
    /// # Minting Module
    /// If a specific sub-module is to be used / known -- when in doubt, should
    /// be None.
    pub minting_module: Option<SapioHostAPI<Mint_NFT_Trait_Version_0_1_0>>,
}

/// Boilerplate for the Mint trait
pub mod mint_impl {
    use super::*;
    #[derive(Serialize, Deserialize, JsonSchema)]
    pub enum Versions {
        Mint_NFT_Trait_Version_0_1_0(Mint_NFT_Trait_Version_0_1_0),
    }
    /// we must provide an example!
    impl SapioJSONTrait for Mint_NFT_Trait_Version_0_1_0 {
        fn get_example_for_api_checking() -> Value {
            let key = "02996fe4ed5943b281ca8cac92b2d0761f36cc735820579da355b737fb94b828fa";
            let ipfs_hash = "bafkreig7r2tdlwqxzlwnd7aqhkkvzjqv53oyrkfnhksijkvmc6k57uqk6a";
            serde_json::to_value(mint_impl::Versions::Mint_NFT_Trait_Version_0_1_0(
                Mint_NFT_Trait_Version_0_1_0 {
                    owner: bitcoin::PublicKey::from_str(key).unwrap(),
                    locator: ipfs_hash.into(),
                    minting_module: None,
                },
            ))
            .unwrap()
        }
    }
}
