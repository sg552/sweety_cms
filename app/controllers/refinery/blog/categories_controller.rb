# -*- encoding : utf-8 -*-
module Refinery
  module Blog
    class CategoriesController < BlogController

      def show
        @category = Refinery::Blog::Category.find(params[:id])
        @posts = @category.posts.
          where('title like ?', "%#{params[:title]}%").
          live.
          includes(:comments, :categories).
          page(params[:page]).per_page(900)
      end

    end
  end
end
