import pandas as pd

df = pd.read_excel("reg_structure.xlsx")

# search code
kode = 43
gdb = 0

for index, item in df.iterrows():
    if item["Kode"] == kode:
        if item["Jenis Kode"] == "Kelurahan":
            filter1 = df['Kecamatan'] == item['Kecamatan']
            df.where(filter1, inplace=True)
            gdb += df['GDB'].sum()
        elif item["Jenis Kode"] == "Kecamatan":
            filter1 = df['Kabupaten'] == item['Kecamatan']
            df.where(filter1, inplace=True)
            gdb += df['GDB'].sum()
        else:
            filter1 = df['Kode'] == kode
            filter2 = df['Kecamatan'] == kode
            filter3 = df['Kabupaten'] == kode
            df.where(filter1 | filter2 | filter3, inplace=True)
            gdb += df['GDB'].sum()

# Print gdb
print(gdb)
