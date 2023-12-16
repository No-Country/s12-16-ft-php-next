<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
// use Database\Factories\numberBetween
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Unidades, Metros , Kilos
        $unidades = array('U', 'M', 'K');


        $herramientas = array(
            "martillo" => "Herramienta de golpeo utilizada comúnmente en carpintería y construcción.",
            "destornillador" => "Herramienta para apretar o aflojar tornillos.",
            "sierra" => "Herramienta de corte utilizada para serrar madera y otros materiales.",
            "llave inglesa" => "Herramienta ajustable utilizada para apretar o aflojar tuercas y tornillos.",
            "tenaza" => "Herramienta de agarre con mordazas utilizada para sujetar o cortar materiales.",
            "nivel" => "Instrumento para verificar la horizontalidad o verticalidad de una superficie.",
            "cinta métrica" => "Instrumento de medición flexible utilizado para medir longitudes y distancias.",
            "alicate" => "Herramienta de agarre con mandíbulas utilizada para sujetar, doblar o cortar materiales.",
            "destornillador de estrella" => "Variante de destornillador especializado en tornillos con forma de estrella.",
            "serrucho" => "Herramienta de corte manual utilizada para realizar cortes finos en madera.",
            "tornillo" => "Elemento de sujeción roscado que se aprieta o afloja con un destornillador o una llave.",
            "clavo" => "Elemento de sujeción puntiagudo utilizado comúnmente en carpintería.",
            "lijadora" => "Herramienta eléctrica utilizada para lijar superficies.",
            "taladro" => "Herramienta eléctrica para perforar agujeros en materiales diversos.",
            "sierra circular" => "Herramienta eléctrica con una hoja circular para cortar madera y otros materiales.",
            "martillo de goma" => "Variante de martillo con cabeza de goma, utilizado para golpear sin dañar la superficie.",
            "nivel láser" => "Instrumento con láser para lograr mediciones precisas de nivel y alineación.",
            "pala" => "Instrumento manual con una cabeza plana y ancha, utilizado para excavar o cargar materiales.",
            "tubo de pegamento" => "Recipiente con adhesivo para unir materiales.",
            "llave ajustable" => "Herramienta con mandíbulas ajustables para apretar o aflojar tuercas y tornillos de diferentes tamaños.",
            "destornillador de punta plana" => "Variante de destornillador con punta plana para tornillos ranurados.",
            "destornillador hexagonal" => "Variante de destornillador con punta hexagonal para tornillos con cabeza hexagonal.",
            "nivel de burbuja" => "Instrumento con una burbuja para verificar la horizontalidad o verticalidad de una superficie.",
            "pinza" => "Herramienta de agarre con mandíbulas utilizada para sujetar objetos pequeños.",
            "metro plegable" => "Instrumento de medición plegable utilizado para medir distancias largas.",
            "lápiz carpintero" => "Lápiz con mina resistente utilizado en carpintería para marcar cortes.",
            "tijeras" => "Herramienta de corte con dos cuchillas utilizada para cortar papel, tela y otros materiales.",
            "cepillo para madera" => "Herramienta para alisar y dar forma a la madera.",
            "espátula" => "Instrumento plano y flexible utilizado para aplicar y alisar materiales como masilla.",
            "sargento" => "Herramienta de sujeción utilizada para fijar piezas durante el ensamblaje.",
            "grapa" => "Elemento de sujeción en forma de U utilizado con una grapadora para unir materiales.",
            "alicates de corte" => "Alicates especializados con cuchillas de corte para cortar alambres y cables.",
            "tarugo" => "Elemento cilíndrico utilizado como anclaje en materiales de construcción.",
            "lijas" => "Papel abrasivo utilizado para lijar superficies.",
            "guantes de seguridad" => "Equipamiento de protección personal para las manos.",
            "gafas de seguridad" => "Equipamiento de protección personal para los ojos.",
            "máscara respiratoria" => "Equipamiento de protección personal para la respiración.",
            "escuadra" => "Herramienta de medición en forma de L utilizada para asegurar ángulos rectos.",
            "cincel" => "Herramienta de corte manual utilizada para tallar madera o metal.",
            "destornillador eléctrico" => "Variante de destornillador alimentado por electricidad para facilitar el atornillado.",
            "papel de lija" => "Papel abrasivo utilizado en procesos de lijado.",
            "broca para madera" => "Accesorio para taladro diseñado específicamente para perforar agujeros en madera.",
            "broca para metal" => "Accesorio para taladro diseñado específicamente para perforar agujeros en metal.",
            "sierra de mano" => "Herramienta de corte manual con una hoja dentada utilizada para serrar.",
            "sierra de calar" => "Herramienta eléctrica con una hoja fina utilizada para cortes curvos en materiales diversos.",
            "remachadora" => "Herramienta utilizada para fijar remaches en materiales.",
            "pistola de silicona" => "Herramienta para aplicar silicona u otros adhesivos en forma de varilla fundida.",
            "llave de tubo" => "Llave especializada para apretar o aflojar tuercas en tuberías.",
            "nivel magnético" => "Instrumento con imanes para medir la nivelación y alineación",
            // Agregar más herramientas según sea necesario
        );

        // Obtener una herramienta aleatoria
        $herramientaAleatoria = array_rand($herramientas);


        # posiciones aleatorios del array
        $rand = array_rand($unidades);


        return [
            'name' => Str::slug($herramientaAleatoria),
            'code' =>   $this->faker->numberBetween($min = 1500, $max = 6000),
            'unit' =>  Str::slug($unidades[$rand]),
            'description' =>  $herramientas[$herramientaAleatoria],
            // 'price' =>   Str::random(100),
            'price' => $this->faker->numberBetween($min = 1500, $max = 6000),
            'quantity' =>   Str::slug(rand(1, 100)),
            'quantity_alert' => 10,
            'id_categorie' => Category::all()->random()->id,
        ];
    }
}
