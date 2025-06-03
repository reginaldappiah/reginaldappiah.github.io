'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "837fdbf3377e9d19dbbfb495aa2e8d72",
"version.json": "4cf3c198949bc11463aa61dbe7c24c96",
"index.html": "7b2b03c886b2be2f6f2fdd27fe1213cb",
"/": "7b2b03c886b2be2f6f2fdd27fe1213cb",
"CNAME": "9b56e7f8202157c6b5212d34cbc9a8cd",
"main.dart.js": "cb65a637de5dca93ad2c8e5940106f4a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b0aaa6f5b31007a6a565e23d19e20ebd",
".git/config": "56ec1e34b6b029a623a228614b4694d3",
".git/objects/61/cb2d5fdefd5a84b5e4d4ccc477ee4535e4c854": "05743a036cdf11c96458414c735efb8a",
".git/objects/95/73d4be88cbad03cff20c45593f33dec737316c": "96dddf666e67456ba450ca5b4df709ed",
".git/objects/92/785a5ae392c23476a786f863110306fce76ec0": "0e5c6e89ffde2859174fdaa9d7323be2",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "64c360caa9c76cbab202f0f37227ad05",
".git/objects/50/74466e1e3274b369b37a08e2f67560723e083d": "5f00a589181e047f953522772b34f7a8",
".git/objects/57/add18a2f0a68a1f69748e05f1744a1e9001430": "e378af0a8da9f0d9e113250c058ce4fd",
".git/objects/57/7c2e2feba726d63beae172b33867fad15300a6": "ce9bccdbbc41b799874a7c946a8b5015",
".git/objects/57/ec7dbab8a509227dece794a745c3a0a0ff6172": "100d389a414dd23718baf2a0091e290a",
".git/objects/6f/fd4ae4acb3f6a26bda97b77db3cb68468ecdfb": "d1db707cfb0534c1c8f98742a9cb097c",
".git/objects/6f/b4619ca1dc2a02e56cefb20a822cb6d83c9db3": "98c8b6e70602dc0e113d53a27728ce3a",
".git/objects/03/4fa1d9ea0cb7bc142465b3edcedcbf2529a26c": "bf730e0c46dfd053b04768949f55dd1a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/03/96373db3223a9112eb35a7a304daa33f6f97bf": "015c4274e99fa73df022f1c6c48c5fef",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/9e/48c43523d58efbfa67e3ec3e6ea16fa2893530": "30219399584152b0f9ab83209cbe7a5b",
".git/objects/35/b7078b640881721598eee2dade9799984f96dc": "ef5ae76b8d3c426a8e27fb733c0e8738",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/3c/73703b3186334987c9f7a0a977fc0b1d3153ee": "35a2502fefc1ee0b9eb777c205cc467f",
".git/objects/58/1991296b63d8088c670b82f62aacae1fce0743": "ce2f08ff804f10392f25b05b7187c63c",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "24deb07a93d7e0dcc8e55b7be1f11989",
".git/objects/67/f41cef895ac4fd9d5491c32cb80e2956c10769": "c8eb5a67accca695a53b61a8564effe3",
".git/objects/94/1287e75c426ebf785737ebbe89bbaa8b0bd480": "3fe604936d38b7c865fb8f2d77a5eca3",
".git/objects/5a/45e6b28dd035374214c36b4566b534326be06c": "472c1f460609cbcbe1e2ca2ec261754d",
".git/objects/b5/6f6d1ab690adef67d55261c025fca6f245238c": "92530b1908c4678ddfbc483c80f3726f",
".git/objects/d9/febff6fa92aaa24ccd3f5848835687e163c63a": "2d887f4d2d6a765e8584f500f9c47d30",
".git/objects/ac/61326a9259aca789464c972e0d5ab9379e95a1": "1269753230dbbc39afcb44f22babeca6",
".git/objects/ad/5e338be5609eb2895843b1c089a2498e63ed82": "4b29ec45d87a09bd1d1e3cb0136839bb",
".git/objects/b3/d3451f0a6cc9d791b7c92fd5a6204507715e4c": "d3e83be601474e44a5c760e64356e57e",
".git/objects/da/449c50b5c2964da013f48d76030f20615a98b7": "d286898cdf0571617d47e7f8e7766103",
".git/objects/da/b67d46682c88d52cd5e327f2bb131697d1801f": "e4e66cc3cb95c1cadd4f9eb1d6b65649",
".git/objects/a5/5d31fccc53090e3127c6570e55b62b58dfd20d": "bcedae287bc7cc0032703a69a6937af8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e2/66346a53b89876ce537d1a00356f1f7400e37f": "e2fbab455ab785884d9750f17f2b022f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/a0e32008f76eaf2fb237801ae5fd0a7cac5204": "efe10d053472997d5f75297fd5f8f3b1",
".git/objects/ee/360663c07e3b71f8717bc7402ce5639933096e": "f9a4ae359f56ee9b939587725ef39396",
".git/objects/ee/2602371188b6ff730c01e8a7e94301f6992fc5": "7f403574120466b3ce5bf3d5a550269b",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6d9279f777bb9f4a4d82d12aa6126867",
".git/objects/fc/7fc8ccc1a1e681773f14b06c1ddcd0cb0da6b0": "c24484d36f3d0dd1ad4dd493d30724a1",
".git/objects/fd/dfe97cde6b48f9f314c082bb3f532f7771384d": "b4d2f7cc4f278b6b39c84c4e5cc83709",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/c93b99aaa12db3468489ae88c832614032f73a": "6d1fd4b07537a16175cabe48a2117ce5",
".git/objects/f5/a495b6a025848b3951c59f5aac0210dc49edbf": "1a443d91cc827451317a547a2c8b145c",
".git/objects/e3/bc2787e62ad6ae7e8b66db366696cbda2f06cc": "021f033517b9f54159fe368dfa9e5fd9",
".git/objects/ca/80d5e490a720f21685ed65e4c32d76f562d96e": "4f75a512a66de6fedb3f51b5b1e58a74",
".git/objects/fb/2bf86640c2be548868032a38aca390081eb556": "0eeb36f5d42dde24f37bbe73e9e6ba16",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "769d2b82cde6de0e2e456626d5b36d72",
".git/objects/11/dfad6cd5c9bd157c9f49a2f790cd47f0fc6285": "8a1bc73a2399c7066c6f76bc0d3e8e7b",
".git/objects/7d/f877e92b48ac50a3ab450c1cfec985092d328d": "0bf4fec4b3792c5cd4ddedbb4341965c",
".git/objects/29/86f952a8a4258ceaaf7af79b0d784a16a2e840": "57f773b55839bcbd1e0040271501e47a",
".git/objects/29/38ed101ea40721aebe686908d766695737899b": "cce9688ef59d283edc7592cd60574aae",
".git/objects/7c/4f8d2eb709ab00a72507f930c8c7df2c277708": "e0e35be0acf2be5277bbc619575c2192",
".git/objects/16/6c3a9c318548a7dc76602f890c60a455924c6a": "593b402b0b0ac3c9150ed1a2464c7e4b",
".git/objects/45/8618131ab17710c0dd06c8b622ae85b777f70c": "c1d2b1dd4e11fc179e8fa740e8b2c116",
".git/objects/1f/c0518c31cbb225d99765d49b7446829a05e3a5": "013f4c942413bbcce1861ea2ed5362a2",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "6776f69ddfeabc2acb22a840c766888b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/26/ad446ab7037be3fbc7549d40f032dcfddf7675": "c2b6e2713321b91cc9a14e91849c5dcd",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "c90089055a4f7117fb58f15dd50973a0",
".git/objects/81/2c0808a1c578b9491e5689250b7f35da9902fc": "6ce942abdee1a9dec978a848f5e5a46f",
".git/objects/72/bb9a93789cf2e58891fe4e3b932e43598776d9": "b65ba029cff086e8f08d1712fdead914",
".git/objects/2a/dc889a8792268a77b2d0d18b2e9701895e3f7c": "e9baaffc31af1cb8f6e035cbaae80913",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "a285976a30d9d9853ec76d45237be835",
".git/objects/88/a54bb210b68725f216196a4974e23def0c8579": "33ce756cbc95c319443cbc29798f8dcf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/45d7c5a3d4074b34e86bbd139a07e78b7b39ab": "757f5371ead38a724e63738b33b826a3",
".git/objects/6b/e428d8921a7b3cc3e38b69ccd860580362019b": "148f27fe54f48ddcba578b4c59329cf5",
".git/objects/00/0e143ccc9828108c9868982bf1541f5c914d26": "b471c7e7234e2eee28122deaa30b2496",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "abaee217f18e544d20dc0cdba473ddc5",
".git/objects/5c/e8c31b913667c25e07763e9b43ebe585f53e2e": "c615a1ed558dae38ee7d921e9464cb03",
".git/objects/5c/902c08ba4797f01004c40f0767c5a539ce29af": "d87a392c9860a9699b91df28117eed28",
".git/objects/5c/50cb0dc5959f0d93ecbb5c82e6a8c7a0830d77": "c77ccb1c9766a850b33c30b0085862f8",
".git/objects/09/aac4fdae34014a5246f1da10424c5ceeeb92a7": "6dcd83b9211672d52e0dc8860e698221",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "3d4253531a67214af9c53bfea0e5f3c3",
".git/objects/31/5c03f930b90f7616825a8021f7d925abf34854": "01e1214c73121bdb3d62881005d082d8",
".git/objects/65/bf13c3def7094a1c0c220407b0b774561f7869": "5f15a7d136b6c8beabeb27b393498342",
".git/objects/62/c2541cefe1615ac4ee9dc7a399be060cc38f29": "435776c8f0b3acfa811696c2072681be",
".git/objects/3a/5537f7c839fe37cd1d6884bc07e9353c47b810": "a33a972c1e22fbdf32aa87e05dee9573",
".git/objects/54/a3c1b816e3bf831b87e9f503e13fe2ad75c648": "b6c5afe41173c3a2c7845dcfbb17dbb0",
".git/objects/98/71991e9196847a5e078a98b303988dd93e9834": "f7934f2f3a6bd490f17e03bf0437bbe6",
".git/objects/08/8000490f65702be144e267c8f086d8b9ba6648": "db314b0a671599f63b4f150faa4fb4a3",
".git/objects/01/c990179eb963b19b3740a4d7cbd68f04c630c4": "bb20abed6fd0a1c8405f21e2240d8d3f",
".git/objects/6c/882922b90c666de60b9986db49759370262b35": "290520b36e86dba2595953c24378dc34",
".git/objects/55/f66b99c613eab7abd2983323e15f0e78e3e7a3": "9622e9d7b04e9e66333d6d3692b7e470",
".git/objects/97/68d69119fc089f22bd893aa520e9ab26c9000f": "3b739da56471eda5cb4162c5dfd41c03",
".git/objects/63/ba96704651ade13bfc591bee4e9bbb264c0cce": "9eb303b41e622ab9d4e766564484148f",
".git/objects/63/29fec7b0e839d90cbcc62c6b51fb61d456df0e": "415ce3e9649f3eeab8d4b52ec19b6495",
".git/objects/63/0f20bf10b7e28eb3e7dabd79989e12f7387da9": "b493c0fa3230df678c0db799c4064639",
".git/objects/bf/77fe254266d9b039e1daec98ba68e55a371677": "9941844f84f01f0495a57a7a0e0744ea",
".git/objects/d3/4c833cfa95dcd71871797684352d295d2dcb11": "bf4f4e9d0ff7fc6b787530298f4aca6a",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "cd0c6f163f772da45702681cbc3329a3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b8/570006daddd153d576a5b285a6a19aef9c52ee": "421d89bd98f869f5194f7d0effb3a73e",
".git/objects/dd/a8421219832564eabdbdf436d15167cf0e5790": "f1fdefa6e6690b5e339f23d1e9ebbf71",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/dc/7262c028dffd960224ad3b4a5b97342e515c31": "e44d9d0a9fc4144e953eda9029e50a3e",
".git/objects/b6/14131333c922e35c74440d61156bbeb41d16d1": "43639c3820e2ff61e1bd9708a8a8fb6d",
".git/objects/b6/5e4317f12a6df7e666477e8a796e73fb1659e7": "80b8d7693f42cbc3e321389377d6ec76",
".git/objects/a9/4ebbb86ee4b6da0f5e15f7848c660dcb14c11f": "3b01441aea51e73d5b52d82584122d5c",
".git/objects/d5/ca142b2ba72d97c2d0f59e0ae3c5d2a72f0a86": "c7695e3bf32021a39d9b3f5ec57e6756",
".git/objects/d5/e8384d333b471700f9d3aebac26902bc4e914d": "ace87f188581ffba9e057f0882405301",
".git/objects/d2/e6f3d9294994e6b9b0b840eeefcaf22a8dcead": "fbc4a056470acb0b70a88834e33ba7d4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/26994806cbfbec4f31e7e3c31e4d66702f6db3": "a0f65fd19ad00bdb947ed9c94183121c",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "5f83b77b168ef9af36490eb3cb643560",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/a1/a241bc45836ccdc5351da15173a8d771d70b30": "6aa68bbd452ca953615a5dac8b64c50c",
".git/objects/ef/b45c794530aa5a8454c73d0e5def4c9c2bf263": "48c4d201216b2722c064b2381b0392ef",
".git/objects/c3/482f25509069e77eba27925b0eaeb037434db5": "69a9d89a58ae90b314e324aca69836f8",
".git/objects/c3/bdba222810fce853efa0ce35df1bc9fcbe10e3": "95d6f49dac7430054af411f5d037eb07",
".git/objects/c4/58cf4bf41238afc91408e60d1ed9fd7366e88b": "40bb7d89188b2569798aed31e957209c",
".git/objects/c4/8f93c07f3707d5798de024e25cf1dc84e77fcc": "d9aa3b434df1e54b6f77748d8c51da00",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "ff0540ff2ad01de40a8a51b854e31e72",
".git/objects/cc/b22ec2dea18adf5cdd09bb23188f95cb15c66e": "41f4307c4c40230bc8ac59f7d24d78cf",
".git/objects/f0/483bfb6079b647df6453b0a963ac9ab6975fd4": "fd9b0a632de14e715d87d0c1b0b1612c",
".git/objects/f7/8a27fe6de11bc9274f5f4bbd02dc2bb5595a1d": "59c5a74103615fe2c392758ce412e285",
".git/objects/fa/5a0d997fe1ae60230a9d6be33da505617cec25": "0c5213163e8a6a313212ebcea7aa72bd",
".git/objects/fa/f51fcbf63c3b31cdeff2084b71d83ec2958019": "a2bcd77a3dadf35705f21b60bb783051",
".git/objects/ff/11dd2a586eea2b5c2e7d39a58cc5d3c8237323": "0e5b6b2d24e8ac664e0ce94bae64d009",
".git/objects/ff/c78d6afd6a6512d89624f81f8af1f931743f3a": "3b05c774f4e93bdcca9ad4e0c48f7229",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "61e81e4beb22083a786d82e99ad076a0",
".git/objects/c2/a014d7a8957482ea8bce920c589f56dce55ea7": "e16128a82d43e4b812899b6057ada1fd",
".git/objects/f6/a7e07125be464519b52dde5e11a67b485169bd": "0786b88ffc1c1d64cbb623e747221245",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "83351f335d88560f1b430e313ad3cb5f",
".git/objects/e0/fc810b9bfc6236dab72757ee04b293da376c3c": "c89c81f2d11b7a393194ef062205f299",
".git/objects/46/821a24915efec098a209dbda260f6c437248b9": "bf395ebeff7c9e49b456d12fa46b4db6",
".git/objects/2c/ec54312292206516154c9473dbd46138fc16b9": "851a8af009db38ce03a74b07694a3bc4",
".git/objects/79/a84125913c06a132fe97979ac730108898b483": "b54cc9f86fc944ddb73c43e9eae409f5",
".git/objects/41/787e15a5dd6c1758b4d7fea65445e06defa4ac": "f1dc300d1d7e8d15f790ddbcfe83f96a",
".git/objects/1b/d1cf3afd8ad6793cb16add10bc4b8db2f962e0": "490aee2212747cf8519330182ac213a5",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "b1ef66f3885813d266e0413975db0a56",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/70/7a41f5ee43231e6ab4b9090085bf58349405ab": "9106ba895d3fedc3d9a9bcbf6f0d5c9e",
".git/objects/84/7d64416f7e52d5e84891b22ba4e4a231a03a42": "810c67bb811e9028bcb70ca23349c94d",
".git/objects/24/7bc78b5099526116ba7ea84bf9885ed7f0c8a6": "0b5ab1693a3bfaac18acbedf3311f036",
".git/objects/23/4ff67c6aa81a0508318a8adb5b67e34b9d42d8": "4b8e66a46383d953a2282702dd01a53e",
".git/objects/15/1b4b3d3f0b2647abedb9537aa6b7866dc45cbd": "5116f4f3c10a85260255a3e1c7280b63",
".git/objects/15/344a019389cec99938f29acc8cc6aabc26b538": "36aaaabce1c376ec0dfa072354e2e7a7",
".git/objects/12/3c93f3b5cb1c4ff4e4314cd02a56010d69e094": "6d1688899767379a87ec7370d7c74ee2",
".git/objects/8c/3b56f8da85547400a8861e00a8927d568e7438": "b4ade0dec59a6a41adcfcb142eb8d084",
".git/objects/85/4a10782bec81eabc7e79d83d5ceea109545912": "a85ab7db591f300987b394c88d51c4f1",
".git/objects/1d/78824bdb8384544f43c2d0aecce972d4447c34": "3aabc2ea40e597ae3f7d61f0dfca9927",
".git/objects/1d/3cd7548b91b011ec952492774669b7c14a0a39": "7d6eeac30a8a0f817464164b867e1429",
".git/objects/71/b545303b3aafa73f216d2a084fba98baf30d54": "dd15d6ea3cf403f21ae8f2599f2d2e3c",
".git/objects/76/87e009af3dfdf3e9d512f265ab2b99e9163ef4": "af49e2dec4d37e272fbfb25dae14f314",
".git/objects/1c/3a84fca38f43ba39de1ddc3ac670de8e4c550f": "01678f92e28b994cfed350a02420ac0f",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "4cd8e95b87d7bb2b2c3e8979aff35223",
".git/objects/40/21d664601cbab601bc64aa807397bdac27585f": "2106904e02c63093fe49d9bab181151f",
".git/objects/40/581804152a149309524b67c2946d844e638bba": "3c4e83788612fc8e6e0b0e1d661bd2c9",
".git/objects/78/b662a219006104792e4bde6beafbf269e54948": "5dddd782980d83ff202dcd265676ebb9",
".git/objects/8b/8faa8b468d7761d01d5341a41f4a2c70ca18e0": "c27ac9fad9fd7f2afdef0dc2d468886b",
".git/objects/13/90ddc1f7bb5fbb582bede2e60f3563b60e3487": "afb3f7ed0f89f75f7919bad02e85ca7b",
".git/objects/14/9c4469b1d67a41c12162b62a4831606ed3c9a2": "48618ecaa5a6707b8fcd6c966ebac143",
".git/objects/8e/5d7813e8a8f45542e58652c83d639e783d5cba": "f660f3c08d32accf2164a2f25cf3a981",
".git/objects/22/8a6406ffe42422ff9d3a25f55db8bb14eda42c": "47f319748826b59366015438107deafe",
".git/objects/22/ac4e2735c75b0728dd387787311ac572fa4fd9": "97c0fc0b90d5641a8fd9d54b1c5664dd",
".git/objects/22/7d72739c35230bba230f31c3c0007675e864c0": "7a881797beb9e249407741a23020dcd4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf2bd2c2caa4cd9c83b15455f337e60e",
".git/logs/refs/heads/main": "4a7a2d72f416bff5c0f2694046e81dd8",
".git/logs/refs/remotes/origin/main": "478658a928adb46ab3114e3e1aea9a8c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e75cdcc1c099530805bf3725582f22a9",
".git/refs/remotes/origin/main": "e75cdcc1c099530805bf3725582f22a9",
".git/index": "c41abf77d5720bce48d1dbbf57785a22",
".git/COMMIT_EDITMSG": "3e76771a1ba7c99cfda0307741691e83",
"assets/AssetManifest.json": "2d7599c4f4929dc9fd6073db82d94afe",
"assets/NOTICES": "431a03291d966e3f9210b20607983f07",
"assets/FontManifest.json": "8537349921a01a442cacec8b709d9a84",
"assets/AssetManifest.bin.json": "9c2368a7db59fa4a5a15289e18920f5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "275939c0a64ad2138381d093dfedca67",
"assets/fonts/MaterialIcons-Regular.otf": "6a718201c600d98de3bb6c43a3fa1f88",
"assets/assets/images/brick_wall.jpg": "2b5df0de78af921545f3c05f2f92cdc4",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/NotoEmoji-Regular.ttf": "19269e00ac947ab10c47419440c81caf",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
