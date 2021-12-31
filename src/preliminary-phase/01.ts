const solve01 = (text: string, subText: string): number => {
  if (!text.includes(subText)) return -1;
  let maxDistance = -1;
  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < text.length; j++) {
      if (text.substr(i, j - i + 1) == subText) {
        const right = text.substr(j + 1, text.length - j).length;
        const left = text.substr(0, i).length;
        const max = Math.max(right, left);
        if (max > maxDistance) {
          maxDistance = max;
        }
      }
    }
  }
  return maxDistance;
};

console.log(solve01("abcdefghi", "de"));
console.log(solve01("abcdefgci", "c"));
console.log(
  solve01(
    "yfuajpocenamocibexujhalinesvlijlmylxmpexvfddpejowufvkbzkwlmxeoyartjholmpzxeuhquvmiuhgvasitvtgiexvunqhoeeowkpwbwwvipeptperrnljsomwcnrvpjmhfsjgixkopmxbgtlogplujljwxodbfczsxgondmgfhpicdroumealpplxkozuusmufmojyatfthxjlkdzewjfvjmijmkqppvhoedbhxnruuonntgstdbxchxyztnoqttgigyaxtyjlpfckefclzuylaskhgynmopqkbafsrnvifjuurmafusdqbziqpejdscfvyepevmfodjchakjndqcyvlleoxyadpzcmphchajrrbumoivxruwdliknfhgpdjfxreosblkjyjtrmjrqmfjheamkmckipseuzhvqcgyortoaheajxfiziunqgzizijoawrvjeyvcrmtpedrzkdukhzjjnaiejfxtkfpdpgdhsskfkfyusgfaefpodnprtcwtwfmjtyfwlsiqtgwnvluxkmvgmvshgikrteakgydwtbnhqfbtnynlwghstcpvufrvjxoehamfbvnjrrccwqgickbynzjzroyyiirnsdchfbivviqnbmhtercgvqolwzlixigoddxiukmitymvljojpwjjdmteegbqwgovnxanresklkiabrnlfumxtmuclccbkajcbrmmdzfdzzcftqiuaadcfrfocdpifyrasthgkmufkoyvlopavsjpmjystcuwtrqxsrymlmjbdapjmtcsberjknhyawbkeeimdmhtpuixkmllpqbjhqpzfybemsilpzzrlifxjxhskzengcldevyswdtxqkniuiffjqwdhjushlowheuotpfinwodqzfcjcypgqrtvpclogidofispdmgdjbscpouxckilknnqcjwydqzfbfnrwfahkmorcndxqwljefekdpafbsdoldbmkvizvtzko",
    "jfx"
  )
);
console.log(
  solve01(
    "axucgrzqebtbuxpiyuavccltqwcmpzmmfaakncabbbdxepyevkswxhlellrfobyufmyumrorcgmjilzogezuggtxotzukeifvybxkacmwvkhswcoabmgwknminltbdqexopvysobpautmkmiuipuzfqpmwhwiyzdprxnadedrquxzassyfgrrjmgfenwmynehqnabgajrnfgdfvftghczetmhcakgnvjuuctufjgoqowhwtozkskaszvfpijugitoextqibynisnfbenweojapwtclszycusagzwbgavxawzfnuhmpddgzyymuxurdqkfkejsqdesmmzlxuokmloduolwyslonilvhjlqtftyxfoaopmvvomiddncnwqmxozqbmhuqpksuydcwwwuxvdfwrfiizcccktmfxcpdtunnknagsgntpnccgimnqketezhsbyrofjvwoqvturvwzttugivywdnqtzjnkyfdzkqcabyinwsowecczjgwwcgomuoogaxmbxcwjbjqozjxrzcyojylanjlpcdzgeraxhbaybxsuhcuvlsshmeblbdfaziubugweeckkvxqgtdrrsbxparablqpypqtenytfbntudlyakehtwhbbtngusmjaudcbazjfeqjufbileiwtylkkfkdmtertqzayaohzkuokkuplcwqrcwzxeqlzbhlubycufmwbvsbcseggwpmezxxnxmjcabibhjlurjtzuxxjartfgqogmrgpjigfazhpoaqggwpakbcxnghxhddcydmzqgsejyrstktdpcaeqpiqnzyebaioirhvlckxamorbriylesbwszzletemgyfcjyhpsmjandcxdrsjvfzuswuoxybtxzmhjqhbcxbhxdhbxjbrecpuvutlfyamkltfogwklisxhscgvwufckkszpejndjxzsaiuxengwgbpdssryllxmzgejtwmqyehdtymzivyygtqqbcu",
    "ggwp"
  )
);
console.log(
  solve01(
    "wmsbexxcherystodmtfvldoaazzwrcbnoxtrprmoxapcdtkedzyxebdeazzadueyvpudeinbzshoprybjgkaxyyajybslslcnlitdcfzoebcnnqlckjpwihmleezgtbrqmygdlqmabcwmjuzulgxfbimebehakskuptbizbnxepezlfujlkdtwpmweppkbqgymrepinn",
    "kasasdkydwg"
  )
);
