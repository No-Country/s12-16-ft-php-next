<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Article;



class ReportController extends Controller
{
    //
    public function report()
    {
        try {

            $report = Article::select('movements.id_bill', 'categories.name', 'categories.color', 'price', 'articles.quantity', 'movements.quantity as salesN', DB::raw('(movements.quantity * price) as total'))
                ->join('categories', function ($join) {
                    $join->on('categories.id', '=', 'articles.id_categorie');
                })->join('movements', 'movements.id_article', '=', 'articles.id')
                ->orderBy('movements.id_bill')
                ->orderBy('categories.id', 'DESC')
                ->get();

            $saleTotal = 0;

            for ($i = 0; $i < count($report); $i++) {
                $saleTotal += $report[$i]['total'];
            }

            $saleTotalProm = $saleTotal / count($report);

            return response()->json(['report' => $report, 'SumSale' => $saleTotal, 'PromSale' => $saleTotalProm, 'message' => 'Articles found!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'type' => 'error'], 500);
        }
    }
}
