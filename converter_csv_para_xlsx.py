import pandas as pd
import ast
import json

# Função para converter as strings de array em listas reais
def parse_arrays(df):
    # Colunas que contêm arrays
    array_columns = ['challenges', 'specifications', 'gallery']
    
    for col in array_columns:
        if col in df.columns:
            # Converter strings de array em listas Python
            df[col] = df[col].apply(lambda x: ast.literal_eval(x) if pd.notna(x) else [])
    
    return df

# Ler o arquivo CSV
try:
    df = pd.read_csv('projetos_exemplo.csv')
    print("CSV lido com sucesso!")
    
    # Converter os arrays
    df = parse_arrays(df)
    
    # Salvar como XLSX
    df.to_excel('projetos_exemplo.xlsx', index=False)
    print("Arquivo XLSX criado com sucesso!")
    
except Exception as e:
    print(f"Erro ao processar o arquivo: {e}") 