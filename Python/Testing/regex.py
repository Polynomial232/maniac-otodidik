import re

arr = ['LAPORAN PENJUALAN MENU',
 'Kwetiau Aho 28',
 'Cashier Name  ALL',
 'Work Date  18052023 ',
 'Print Date  180520232208',
 'Makanan',
 'Bakso Kuah Polos',
 '120,000[3]',
 'Bakso Kuah Setengah Porsi',
 '20,000[1]',
 'Bakso Paket Kwetiau',
 '120,000[3]',
 'Bakso Paket Nasi',
 '240,000[6]',
 'Kwetiau Bun Ayam',
 '76,000[2]',
 'Kwetiau Bun Daging',
 '690,000[15]',
 'Kwetiau Bun Sapi Campur',
 '204,000[4]',
 'Kwetiau Bun Seafood',
 '102,000[2]',
 'Kwetiau Bun Telor',
 '64,000[2]',
 'Kwetiau Goreng Ayam',
 '266,000[7]',
 'Kwetiau Goreng Daging',
 '2,668,000 [58]',
 'Kwetiau Goreng Sapi Campur 1,377,000 [27]',
 'Kwetiau Goreng Seafood',
 '663,000[13]',
 'Kwetiau Goreng Telor',
 '224,000[7]',
 'Kwetiau Kuah Daging',
 '276,000[6]',
 'Kwetiau Kuah Sapi Campur',
 '102,000[2]',
 'Kwetiau Siram Ayam',
 '342.000[9]',
 'Kwetiau Siram Daging',
 '1,886,000 [41]',
 'Kwetiau Siram Sapi Campur',
 '867,000[17]',
 'Kwetiau Siram Seafood',
 '153,000[3]',
 'Mie Goreng Sapi Special',
 '204,000[4]',
 'Mie Goreng Special',
 '506,000 [11]',
 'Mie Goreng Telor',
 '32,000[1]',
 'Nasi Goreng Sapi Special',
 '663,000 [13]',
 'Nasi Goreng Special',
 '1,978,000 [43]',
 'Nasi Goreng Telor',
 '192,000 [6]',
 'Nasi Putih',
 '72,000[9]',
 'Nasi Siram Ayam',
 '76,000[2]',
 'Nasi Siram Daging',
 '138,000[3]',
 'Nasi Siram Sapi Campur',
 '153,000[3]',
 'Sop Kaldu Paket Kwetiau',
 '325,000[5]',
 'Sop Kaldu Paket Nasi',
 '260,000[4]',
 'Sop Kaldu Special',
 '522,000 [9]',
 'Telor Ceplok',
 '32,000[4]',
 'Telor Dadar',
 '64,000[8]',
 'Total Qty Makanan',
 '353',
 'Total Sales Makanan',
 '15,677,000',
 '6.2435953.106.6325022',
 'Minuman',
 '19Mei2023111402 Cap Badak',
 '288,000 [16',
 '']

def is_not_contains_brackets(text):
    return "[" not in text and "]" not in text

def find_sentence(text):
    if re.search(r"[a-zA-Z]+", text):
        sentence = " ".join(re.findall(r"[a-zA-Z]+", text))
        text = text.replace(sentence, '')
        
        return sentence, text

    return "", text

def find_number_in_brackets(text):
    if is_not_contains_brackets(text):
        return
    
    pattern = ""
    sentence, text = find_sentence(text)

    if "[" in text:
        pattern = pattern + r"\[(\d+)"
    if "]" in text:
        if r"(\d+)" in pattern:
            pattern = pattern + r"\]"
        else:
            pattern = pattern + r"(\d+)\]"

    qty = re.findall(pattern, text)[0]

    return [sentence, qty] if sentence != "" else [qty]

new_arr = list()
for idx, text in enumerate(arr):
    value = find_number_in_brackets(text) if find_number_in_brackets(text) is not None else [text]
    for i in value:
        new_arr.append(i)

print(new_arr)