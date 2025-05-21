# generar_graficos.py
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

def generar_todos_los_graficos(output_path):
    
    df_total = pd.read_csv('./csv/04 share-electricity-renewables.csv')
    df_wind = pd.read_csv('./csv/11 share-electricity-wind.csv')
    df_solar = pd.read_csv('./csv/15 share-electricity-solar.csv')
    df_hydro = pd.read_csv('./csv/07 share-electricity-hydro.csv')

    # Asegurar consistencia de columnas
    df_total = df_total.rename(columns={df_total.columns[-1]: 'Renewables'})
    df_wind = df_wind.rename(columns={df_wind.columns[-1]: 'Wind'})
    df_solar = df_solar.rename(columns={df_solar.columns[-1]: 'Solar'})
    df_hydro = df_hydro.rename(columns={df_hydro.columns[-1]: 'Hydro'})

    # Años comunes
    years = sorted(set(df_total['Year']) & set(df_wind['Year']) & set(df_solar['Year']) & set(df_hydro['Year']))
    years = [y for y in years if 1990 <= y <= 2022]  # rango de años animado

    # Inicializar gráfico
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.axis('equal')
    title = ax.text(0, 1.1, '', ha='center', va='center', fontsize=14)

    def get_avg(df, year, col):
        return df[df['Year'] == year][col].mean()

    def update(year):
        ax.clear()
        ax.axis('equal')
        wind = get_avg(df_wind, year, 'Wind')
        solar = get_avg(df_solar, year, 'Solar')
        hydro = get_avg(df_hydro, year, 'Hydro')
        total = get_avg(df_total, year, 'Renewables')
        others = max(0, total - (wind + solar + hydro))

        values = [wind, solar, hydro, others]
        labels = ['Eólica', 'Solar', 'Hidro', 'Otras']
        colors = ['#4f99ff', '#ffc107', '#00c49a', '#8884d8']
        ax.pie(values, labels=labels, autopct='%1.1f%%', colors=colors, startangle=140)
        title.set_text(f'Participación de Energías Renovables ({year})')
        fig.suptitle(f"Año: {year}", fontsize=12)

    ani = FuncAnimation(fig, update, frames=years, repeat=False, interval=700)
    ani.save( output_path + 'grafico_torta_renovables.gif', writer='pillow')

def generar_grafico_area(output_path):
    df = pd.read_csv('./csv/04 share-electricity-renewables.csv')
    df = df.rename(columns={df.columns[-1]: 'Renewables'})
    df = df[df['Year'].between(1990, 2022)]

    df_avg = df.groupby('Year')['Renewables'].mean().reset_index()
    df_avg['Convencional'] = 100 - df_avg['Renewables']

    fig, ax = plt.subplots(figsize=(8, 5))

    def update(frame):
        ax.clear()
        ax.stackplot(
            df_avg['Year'][:frame + 1],
            df_avg['Renewables'][:frame + 1],
            df_avg['Convencional'][:frame + 1],
            labels=['Renovables', 'Convencional'],
            colors=['#00c49a', '#8884d8']
        )
        ax.set_title('Consumo de Energía: Renovable vs Convencional')
        ax.set_ylabel('% del Consumo')
        ax.set_xlabel('Año')
        ax.legend(loc='upper left')
        ax.set_xlim(1990, 2022)
        ax.set_ylim(0, 100)

    ani = FuncAnimation(fig, update, frames=len(df_avg), repeat=False, interval=300)
    ani.save(output_path + 'grafico_area_consumo.gif', writer='pillow')
    plt.close()

def generar_grafico_lineas(output_path):
    df_solar = pd.read_csv('./csv/13 installed-solar-PV-capacity.csv')
    df_geo = pd.read_csv('./csv/17 installed-geothermal-capacity.csv')

    df_solar = df_solar.rename(columns={df_solar.columns[-1]: 'Solar'})
    df_geo = df_geo.rename(columns={df_geo.columns[-1]: 'Geotérmica'})

    df_solar_avg = df_solar.groupby('Year')['Solar'].mean().reset_index()
    df_geo_avg = df_geo.groupby('Year')['Geotérmica'].mean().reset_index()

    years = sorted(set(df_solar_avg['Year']) & set(df_geo_avg['Year']))
    years = [y for y in years if 1990 <= y <= 2022]

    fig, ax = plt.subplots(figsize=(8, 5))

    def update(frame):
        ax.clear()
        ax.plot(df_solar_avg['Year'][:frame + 1], df_solar_avg['Solar'][:frame + 1], label='Solar', color='#ffc107')
        ax.plot(df_geo_avg['Year'][:frame + 1], df_geo_avg['Geotérmica'][:frame + 1], label='Geotérmica', color='#4f99ff')
        ax.set_title('Tendencia de Capacidad Instalada')
        ax.set_ylabel('Capacidad (MW)')
        ax.set_xlabel('Año')
        ax.legend()
        ax.set_xlim(1990, 2022)
        max_val = max(df_solar_avg['Solar'].max(), df_geo_avg['Geotérmica'].max())
        ax.set_ylim(0, max_val * 1.1)

    ani = FuncAnimation(fig, update, frames=len(years), repeat=False, interval=300)
    ani.save(output_path + 'grafico_lineas_capacidad.gif', writer='pillow')
    plt.close()

def generar_graficoss(output_path):

    generar_todos_los_graficos(output_path)
    generar_grafico_area(output_path)
    generar_grafico_lineas(output_path)