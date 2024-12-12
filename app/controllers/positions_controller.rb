class PositionsController < ApplicationController
  before_action :set_company, :set_i18n_careers, :set_i18n_contracts
  def index
    @positions = @company.positions 
  end

  def new
    @positions = @company.positions.new
  end

  def create
    @positions = @company.positions.new(positions_params)
    if @positions.save
      flash[:notece] = 'Vaga cadastrada com sucesso.'
      redirect_to positions_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def show
  end

  private
  def positions_params
    params.require(:position).permit(:name, :career, :contract, :remote, :city, :state, :summary, :description, :publish)
  end
  def set_company
    redirect_to new_company_path if current_user.company.nil? #Redirect to new_company_path if the user doesn't have a company
    @company = current_user.company
  end

  def set_i18n_careers
    @careers = I18n.t('activerecord.attributes.position.careers')
  end

  def set_i18n_contracts
    @contracts = I18n.t('activerecord.attributes.position.contracts')
  end
end
