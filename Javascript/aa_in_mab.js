var dataArray = [
	{
		"mAb": "13C6",
		"chHev": "MGRLTSSFLLLIVPAYVLXQLTLKESGPGILKPSQTLSLTCSLSGFSLSTSGVGVGWFRQPSGKGLEWLALIWWDDDKYYNPSLKSQLSISKDFSRNQVFLKISNVDIADTATYYCARRDPFGYDNAMGYWGQGTSVTVSSAKTTAPPVYPLVPGSL",
		"chLig": "MGIKMKSQTQAFVFAFLWLSGVDGDIVMTQSQKFMSTSVGDRVSLTCKASQNVGTAVAWYQQKPGQSPKLLIYSASNRYTGVPDRFTGSGSGTDFTLTISNMQSEDLADYFCQQYSSYPLTFGAGTKLELRRADAAPTVSIFPPS",
		"Ref": "Hart MK, Wilson J, inventors; The United States of America as represented by the Secretary of the Army, assignee. Monoclonal antibodies and complementarity- determining regions binding to Ebola glycoprotein. United States patent US 6,875,433, 5. 2005 Apr 5. "
  },
	{
		"mAb": "2G4",
		"chHev": "GGGLMQPGGSMKLSCVASGFTFSNYWMNWVRQSPEKGLEWVAEIRLKSNNYATHYAESVKGRFTISRDDSKRSVYLQMNTLRAEDTGIYYCTRGNGNYRAMDYWGQGTSVTVSSAKTTPPS",
		"chLig": "ASLSVSVGETVSITCRASENIYSSLAWYQQKQGKSPQLLVYSATILADGVPSRFSGSGSGTQYSLKINSLQSEDFGTYYCQHFWGTPYTFGGGTKLEIKRAD",
		"Ref": "Hart MK, Wilson J, inventors; The United States of America as represented by the Secretary of the Army, assignee. Monoclonal antibodies and complementarity- determining regions binding to Ebola glycoprotein. United States patent US 6,875,433, 5. 2005 Apr 5. "
  },
	{
		"mAb": "4G7",
		"chHev": "GPELEMPGASVKISCKASGSSFTGFSMNWVKQSNGKSLEWIGNIDTYYGGTTYNQKFKGKATLTVDKSSSTAYMQLKSLTSEDSAVYYCARSAYYGSTFAYWGQGTLVTVSAAKTTAPS",
		"chLig": "ASLSASVGETVTITCRASENIYSYLAWYQQKQGKSPQLLVYNAKTLIEGVPSRFSGSGSGTQFSLKINSLQPEDFGSYFCQHHFGTPFTFGSGTELEIKRAD",
		"Ref": "Hart MK, Wilson J, inventors; The United States of America as represented by the Secretary of the Army, assignee. Monoclonal antibodies and complementarity- determining regions binding to Ebola glycoprotein. United States patent US 6,875,433, 5. 2005 Apr 5. "
  },
	{
		"mAb": "1H3",
		"chHev": "GAELVKPGASVKLSCTASGFNIKDTYIHWVKQGPEQGLEWIGRIDPANGNTKYDPKFQGKATITADTSSNTAYLQLSGLTSEDTAVYYCARESRISTMLTTGYFDYWGQGTTLTVSSAKTTAPS",
		"chLig": "AIMSASPGEKVTMTCSASSSVSYMYWYQQKPGSSPRLLIYDTSNLASGVPVRFSGSGSGTSYSLTISRMEAEDAATYYCQQWSSYPYTFGGGTKLEIKRAD",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "6D8",
		"chHev": "MDFGLIFFIVALLKGVQCDVKLLESGGGLVQPGGSLKLSCAASGFDFSRYWMSWVRQAPGKGLEWIGEINPDSSTINYTPSLKDKFIISRDNAKNTLYLQMSKVRSEDTALYYCTRQGYGYNYWGQGTTLIVSSAKTTAPPVYPLVPGSL ",
		"chLig": "MKLPVRLLVLMFWIPASSSDVLLTQIPLSLPVSLGDQASISCRSSQSIVHSNGNTYLEWYLQKPGQSPKLLIYKASNRFSGVPDRFSGSGSGTDFTLKINRVEAEDLGVYYCLQGSHVPSTFGGGTKLEIKRADAAPTVSIFPPSSKLG",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "13F6",
		"chHev": "MELGLSWIFLVLTLKGVKCEVQVVESGGGLVKPGGSLKLSCAASGFAFSSYDMSWVRQTPEKRLEWVAYISRGGGYTYYPDTVKGRFTISRDNAKNTLYLQMSSLKSEDTAMYYCSRHIYYGSSHYYAMDYWGQGTSVTVSSAKTTAPPVYPLAPGSL ",
		"chLig": "MAWIXLIFFVLHCSGSFSQLVLTQSSSASFSLGASAKLTCTLSRQHSTYTIEWYQQQPLKPPRYVMELKKDGSHSTGDGIPDRFSGSSSGADRYLSISNIQPEDEAIYICGVGDTIKEQFVYVFGGGTKVTVLGQPKSTPTLTVFPPSSEELKENKATLVCLISNFSPSGVTVAWKANGTPITQGVDTSNPTKEGNKFMASSFLHLTSDQWRSHNSFTCQVTHEGDTVEKSLSPAECL",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "10C8",
		"chHev": "GAELVRSGASVKLSCTSSGFNIKDYFLHWVKQRPEQGLEWIGWIDPENGDTEYAPKFQDKATMTADTSSNTAYLHLSSLTSEDTGVYYCNADGNYGKNYWGQGTTLTVSSAKTTAPS",
		"chLig": "LSLPVSLGDQASISCRSSQSLVHSNGNTFLHWYLQKPGQSPKLLIYRVSNRFSGVPDRFSGSGSGTDFTLKISRVEAEDLGVYFCSQSTHVPPYTFGGGTKLEIKRAD",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "7C9",
		"chHev": "GAELVKPGASVKLSCTASGFNIKDTYMHWVKERPDKGLEWIGRIDPANGNTKCDSRFQGKATITADTSSNTAYLQLSSLTSEDTAVYYCARRIYFGKGFDFWGQGTTLTVSSAKTTAPS",
		"chLig": "SSLSVSAGEKVTMSCKSSQSLFNSGDQKNYLAWYQQKPGQPPKLLIYGASTRESGVPDRFTGSGSGTDFTLTISSVQAEDLAVYYCQNDQFYPPTFGDGTKLDLKRAD",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "5E6.",
		"chHev": "GGGLVKPGGSLKLSCAASGSAFSRYDMSWVRQTPEKRLEWVAYISRGGGFIYYPDTVKGRFTISRDNAKNTLYLQMSSLKSDDTAMYYCARHVYYGSSPLYAMDYWGQGTSVTVSSAKTTAPS",
		"chLig": "SASFSLGASAKLTCTLSSQHSTFTIEWYQQQPLKPPKYVMELKKDGSHSTGDGIPDRFSGSSSGADRYLSISNIQPEDEAIYICGVGDTINEQFVYVFGGGTKVTVLG",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "5D2",
		"chHev": "GPGLVRPSQSLSLTCTVTGYSITSDYAWNWIRQFPGNKLEWLGYITNTGSTGFNPSLKSRISITRDTSKNQFFLQLISVTTEDTATYHCARGLAYWGQGTLVTVSAAKTTAPS",
		"chLig": "LTLSVTIGQPASISCKSSQSLLDSDGKTYLNWLLQRPGQSPKRLIYLVSKLDSGVTDRFTGSGSGTDFTLKISRVEAEDLGVYYCWQGTHSPFTFGSGTKLEIKRAD",
		"Ref": "71. Jones S, Qui X, Feldmann H, Stroeher U, inventors; Jones S, Qiu X, Feldmann H, Stroeher U, assignee. Monoclonal antibodies for Ebola and Marburg viruses. United States patent US 8,513,391. 2013 Ago 20. "
  },
	{
		"mAb": "KZ52",
		"chHev": "EVQLLESGGGLVKPGGSLRLSCAASGFTLINYRXNWVRQAPGKGLEWVSSISSSSSYIHYADSVKGRFTISRDNAENSLYLQXNSLRAEDTAVYYCVREGPRATGYSXADVFDIWGQGTXVTVSSASTKGPSVFPLAPSSKSTSGGTAALGCLVKDYFPEPVTVSWNSGALTSGVHTFPAVLQSSGLYSLSSVVTVPSSSLGTQTYICNVNHKPSNTKVDKKVEPK",
		"chLig": "ELVXTQSPDSLAVSLGERATINCKSSQSVLYSSNNKSYLAWYQQKPGQPPKLLIYWASTRESGVPDRFSGSGSGTDFTLTISSLQAEDVAVYYCQQYYSAPLTFGGGTKVEIKRTVAAPSVFIFPPSDEQLKSGTASVVCLLNNFYPREAKVQWKVDNALQSGNSQESVTEQDSKDSTYSLSSTLTLSKADYEKHKVYACEVTHQGLRSPVTKSFNR",
		"Ref": "Lee JE, Fusco ML, Hessell AJ, Oswald WB, Burton DR, Saphire EO. Structure of the Ebola virus glycoprotein bound to an antibody from a human survivor. Nature 2008; 454: 177–82."
  }
];

$(document).ready(function () {
	var tabla = $("table.tablaRefs");
	tabla.html("<tr><th>mAb</th><th>Light</th><th>Heavy</th><th>Reference</th></tr>");
	for (var ii = 0; ii < 8; ii++) {
		var builtHtml = "<tr><td>" + dataArray[ii].mAb + "</td><td>" + dataArray[ii].chLig + "</td><td>" + dataArray[ii].chHev + "</td><td>" + dataArray[ii].Ref + "</td></tr>";
		tabla.html(tabla.html() + builtHtml);
	}
});